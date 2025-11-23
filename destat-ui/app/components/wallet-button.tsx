import { useAccount, useDisconnect, useSwitchChain } from 'wagmi'
import {Button} from "./ui/Button";
import {rabbykit} from "~/root";
import { hardhat } from "@wagmi/core/chains";

export default function WalletButton() {
    const { address, isConnected, chainId } = useAccount();
    const { disconnect } = useDisconnect();
    const { switchChain } = useSwitchChain();

    const handleConnect = async () => {
        rabbykit.open();
        // 연결 후 하드햇 네트워크로 전환 시도
        setTimeout(() => {
            if (chainId !== hardhat.id) {
                switchChain({ chainId: hardhat.id });
            }
        }, 1000);
    };

    return (
        <>
            {isConnected ? (
                <div className="flex items-center gap-2">
                    {chainId !== hardhat.id && (
                        <Button 
                            onClick={() => switchChain({ chainId: hardhat.id })}
                            variant="outline"
                        >
                            Switch to Hardhat
                        </Button>
                    )}
                    <Button onClick={() => disconnect()}>Disconnect</Button>
                </div>
            ) : (
                <Button onClick={handleConnect}>Connect</Button>
            )}
        </>
    );
}