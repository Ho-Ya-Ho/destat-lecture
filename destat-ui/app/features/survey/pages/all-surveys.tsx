import SurveyCard from "~/features/survey/components/survey-card";
import {createPublicClient, getContract} from "viem";
import {hardhat} from "@wagmi/core/chains";
import {http} from "@wagmi/core";
import {SURVEY_ABI, SURVEY_FACTORY, SURVEY_FACTORY_ABI} from "~/features/survey/constant";
import {useEffect, useState} from "react";

interface surveyMeta {
    title: string;
    description: string;
    count: number;
    view: number|null;
    image: string|null;
    address: string;
}

export default function AllSurveys() {
    const [surveys, setSurveys] = useState<surveyMeta[]>([]);

    const onChainLoader = async () => {
        const client = createPublicClient({
            chain: hardhat,
            transport: http(),
        });
        const surveyFactoryContract = getContract({
            address: SURVEY_FACTORY,
            abi: SURVEY_FACTORY_ABI,
            client
        });
        const surveys = await surveyFactoryContract.read.getSurveys();
        const surveyMetaData = await Promise.all(
            surveys.map(async (surveyAddress) => {
                const surveyContract = getContract({
                    address: surveyAddress,
                    abi: SURVEY_ABI,
                    client
                });
                const title = await surveyContract.read.title();
                const description = await surveyContract.read.description();
                const answer = await surveyContract.read.getAnswers();
                return {title, description, count:answer.length, view:null, image:null, address:surveyAddress};
        }));
        return surveyMetaData;
    };

    const offChainLoader = async (): Promise<surveyMeta[]> => {
        return [{
            title: "test title",
            description: "test description",
            count: 10,
            view: 1600,
            image: "https://picsum.photos/200/300?random=1",
            address: "null"
        }];
    }

    useEffect(() => {
        const onchainData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const onchainSurveys = await onChainLoader()
            setSurveys(onchainSurveys);
        };
        onchainData();

        const offchainData = async () => {
            const offchainSurveys = await offChainLoader()
            setSurveys(offchainSurveys);
        };
        offchainData();
    }, []);

    return (
        <div className={"grid grid-cols-4 gap-4"}>
            <div className={"flex flex-col justify-center items-center"}>
                <h1 className={"text-2xl font-extrabold"}>Live Surveys</h1>
                <span className={"font-light"}>Join the surveys!</span>
            </div>
            {surveys.map((survey) => (
                <SurveyCard
                    title={survey.title}
                    description={survey.description}
                    view={1600}
                    count={survey.count}
                    image={"https://picsum.photos/200/300?random=1"}
                    address={survey.address}
                />
            ))}
        </div>
    );
}