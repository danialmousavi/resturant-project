import { cookies } from 'next/headers';
import Paginate from "./Paginate";

export default async function Table({ params }) {
    const token = cookies().get("Token")?.value;
    const res = await fetch(`http://localhost:8000/api/profile/transactions?${params}`,{
        method:"GET",   
        headers:{
            "Accept":"application/json",
            "Authorization":`Bearer ${token}`,
        }
    })
    const {data}=await res.json();
    console.log(data);
    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>شماره سفارش</th>
                            <th>مبلغ</th>
                            <th>وضعیت</th>
                            <th>شماره پیگیری</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <th>
                                    {transaction.order_id}
                                </th>
                                <td>{transaction.amount.toLocaleString()} تومان</td>
                                <td>
                                    <span className={transaction.status == 'موفق' ? "text-success" : "text-danger"}>{transaction.status}</span>
                                </td>
                                <td>{transaction.trans_id}</td>
                                <td>{transaction.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Paginate links={data.meta.links} />
        </>
    )
}