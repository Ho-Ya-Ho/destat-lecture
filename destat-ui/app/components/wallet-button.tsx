import { useAccount, useDisconnect } from 'wagmi'
import {Button} from "./ui/Button";
import {rabbykit} from "~/root";

export default function WalletButton() {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    return (
        <Button
            onClick={() => {
                rabbykit.open()
            }}
        >
            {isConnected ? (
                <Button onClick={() => disconnect()}>Disconnect</Button>
            ) : (
                <Button onClick={() => rabbykit.open()}>Connect</Button>
            )}
        </Button>
    );
}