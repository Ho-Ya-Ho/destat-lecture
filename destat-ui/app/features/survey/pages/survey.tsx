import {Card, CardHeader, CardAction, CardContent, CardDescription, CardFooter, CardTitle} from "~/components/ui/card";
import {Form} from "react-router";
import {SendIcon, User2Icon} from "lucide-react";
import {Button} from "~/components/ui/Button";
import MessageBubble from "~/features/survey/message-bubble";

export default function Survey() {
    return (
        <div className={"grid grid-cols-3 w-screen gap-3"}>
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
            <Card className={"col-span-2"}>
                <CardHeader>
                    <CardTitle>Sample Survey</CardTitle>
                    <CardDescription>
                        This is a sample survey. Let's join to get Rewards
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}