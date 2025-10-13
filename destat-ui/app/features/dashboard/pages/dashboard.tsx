import {supabase} from "~/postgres/supaclient";
import {layout} from "@react-router/dev/routes";

// - navigation
//     - Dashboard
//     - Survey
//         - All surveys
//         - Create survey
//     - Archive
//         - Finished surveys
//     - Profile
//         - My surveys
//         - My response

// loader() 함수는 Dashboard() 이 실행되기 직전에 실행됨
export async function loader() {
    const {data} = await supabase().from('destat-test').select('*');
    console.log(data);
}

export default function Dashboard() {
    return <div>
        Home
    </div>
}