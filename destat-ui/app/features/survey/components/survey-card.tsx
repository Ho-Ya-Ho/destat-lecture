import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/Button";
import {Link} from "react-router";
import {EyeIcon, UsersIcon, ViewIcon} from "lucide-react";

/**
 * Renders a SurveyCard component that displays a sample survey card with a title, description,
 * image, and a button to join the survey.
 *
 * @return {JSX.Element} The SurveyCard component.
 */
export default function SurveyCard() {
    return (
        <Link to={"/survey/surveyId"}>
            <Card className={"max-w-92"}>
                <CardHeader>
                    <div className={"flex flex-row justify-between items-center"}>
                        <CardTitle>Sample Survey</CardTitle>
                        <div className={"flex flex-row gap-2"}>
                            <div className={"flex flex-row text-xs gap-0.5"}>
                                <EyeIcon size={17} /> 1600
                            </div>
                            <div className={"flex flex-row text-xs gap-0.5"}>
                                <UsersIcon size={17} /> 58
                            </div>
                        </div>
                    </div>
                    <CardDescription className={"line-clamp-2 min-h-10"}>
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                        This is a sample. survey. Let's join to get Rewards
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        className={"rounded-2xl"}
                        src={"https://avatars.githubusercontent.com/u/1013641?v=4"}
                    />
                </CardContent>
                <CardFooter>
                    <Button className={"w-full"}>
                        <Link to={"/survey/surveyId"}>Join</Link>
                    </Button>
                </CardFooter>
            </Card>
       </Link>
    )
}