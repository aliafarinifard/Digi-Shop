import { getCurrentUser } from "@/actions/getCurrentUser";
import AdminNav from "../components/admin/AdminNav";


export const metadata = {
    title: "E~Shop Admin",
    description: "E~Shop Admin Dashboard"
};


const AdminLayout = async ({ children }: { children: React.ReactNode }) => {

    const currentUser = await getCurrentUser();

    return (
        <div>
            <AdminNav currentUser={currentUser} />
            {children}
        </div>
    )
}

export default AdminLayout