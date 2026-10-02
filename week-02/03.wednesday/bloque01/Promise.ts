
interface Message {
    id: number;
    text: string;
}

async function getMessage(message: Message): Promise<Message> {
    return message;
}

async function main(): Promise<void> {
    const message = await getMessage({id: 1, text: "Hello TypeScript"});
    console.log(message);
}

main();