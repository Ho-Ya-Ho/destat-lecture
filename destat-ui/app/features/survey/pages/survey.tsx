import {Card, CardHeader, CardAction, CardContent, CardDescription, CardFooter, CardTitle} from "~/components/ui/card";
import {Form} from "react-router";
import {SendIcon, User2Icon} from "lucide-react";
import {Button} from "~/components/ui/Button";
import MessageBubble from "~/features/survey/message-bubble";

interface questions {
    question:string;
    options:string[];
}
const questions: questions[] = [
  {
    question: "블록체인에서 트랜잭션이 검증되는 과정을 무엇이라 하나요?",
    options: ["마이닝", "스테이킹", "커밋", "인덱싱"],
  },
  {
    question: "다음 중 대칭키 암호화 방식이 아닌 것은?",
    options: ["AES", "DES", "RSA", "ChaCha20"],
  },
  {
    question: "HTTP 프로토콜의 기본 포트 번호는 무엇인가요?",
    options: ["80", "8080", "22", "443"],
  },
  {
    question: "다음 중 파이썬의 자료형이 아닌 것은?",
    options: ["list", "tuple", "map", "set"],
  },
  {
    question: "SQL에서 데이터를 조회할 때 사용하는 명령어는?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
  },
];

export default function Survey() {
    return (
        <div className={"grid grid-cols-3 w-screen gap-3"}>
          <Card className={"col-span-2"}>
            <CardHeader>
              <CardTitle className={"font-extrabold text-3xl"}>
                Sample Survey
              </CardTitle>
              <CardDescription>
                This is a sample survey. Let's join to get Rewards
              </CardDescription>
            </CardHeader>
            <CardContent className={"overflow-y-auto h-[70vh]"}>
              <h1 className={"font-semibold text-xl pb-4"}>Survey Progress</h1>
              <div className={"gap-5 grid grid-cols-2"}>
                {questions.map((q, i) => (
                  <div className={"flex flex-col"}>
                    <h1 className={"font-bold"}>{q.question}</h1>
                    <div className={"flex flex-col pl-2 gap-1"}>
                      {q.options.map((o, j) => (
                        <div className={"flex flex-row justify-center items-center relative"}>
                          <div className={"left-2 absolute text-xs font-semibold"}>{o}</div>
                          <div className={"w-full bg-gray-200 h-5 rounded-full"}>
                            <div className={"bg-blue-400 w-14 h-5 rounded-full"}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className={"col-span-1"}>
                <CardHeader>
                    <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent className={"flex flex-col gap-5 overflow-y-auto h-[70vh]"}>
                    {Array.from({length: 20}).map((_, i) => (
                        <MessageBubble sender={i % 2 == 0}/>
                    ))}
                </CardContent>
                <CardFooter className={"w-full"}>
                    <Form className={"flex flex-row items-center relative"}>
                        <input
                            type={"text"}
                            placeholder={"Enter your name"}
                            className={"border-1 w-full h-8 rounded-2xl px-2 text-xs"}
                        />
                        <Button className={"flex flex-row justify-center items-center w-6 h-6 absolute right-2"}>
                            <SendIcon/>
                        </Button>
                    </Form>
                </CardFooter>
            </Card>
        </div>
    );
}