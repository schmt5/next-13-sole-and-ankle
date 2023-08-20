import { pb } from "@/helpers/pocketbase";

export default async function ShopLayout({ children }) {
    const records = await pb.collection('shoes').getList(1, 1);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3>shop now - over {records.totalItems} shoes!</h3>
            </div>
            {children}
        </div>
    )
}