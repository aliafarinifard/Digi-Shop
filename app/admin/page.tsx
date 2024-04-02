import Summary from "./Summary"
import Container from "../components/Container";

import { getCurrentUser } from "@/actions/getCurrentUser";


const Admin = async () => {

    const currentUser = await getCurrentUser();

    return (
        <div className="pt-8">
            <Container>
                <Summary currentUser={currentUser} />
            </Container>
        </div>
    )
}

export default Admin