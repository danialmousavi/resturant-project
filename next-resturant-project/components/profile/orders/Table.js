import { cookies } from "next/headers";

export default async function Table() {
    const token = cookies().get("Token")?.value;
    const res = await fetch("http://localhost:8000/api/profile/orders",{
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
                            <th>آدرس</th>
                            <th>وضعیت</th>
                            <th>وضعیت پرداخت</th>
                            <th>قیمت کل</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.orders.map(order => (
                            <tr key={order.id}>
                                <th>{order.id}</th>
                                <td>{order.address_title}</td>
                                <td>{order.status}</td>
                                <td>
                                    <span className={order.payment_status == 'موفق' ? "text-success" : "text-danger"}>{order.payment_status}</span>
                                </td>
                                <td>{order.paying_amount.toLocaleString()} تومان</td>
                                <td>{order.created_at}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#modal-1">
                                        محصولات
                                    </button>
                                    <div className="modal fade" id="modal-1">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6 className="modal-title">محصولات سفارش
                                                        شماره 25</h6>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <table className="table align-middle">
                                                        <thead>
                                                            <tr>
                                                                <th>محصول</th>
                                                                <th>نام</th>
                                                                <th>قیمت</th>
                                                                <th>تعداد</th>
                                                                <th>قیمت کل</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    <img src="../images/b1.jpg" width="80" alt="" />
                                                                </th>
                                                                <td className="fw-bold">برگر گوشت ذغالی</td>
                                                                <td>45,000 تومان</td>
                                                                <td>
                                                                    2
                                                                </td>
                                                                <td>90,000 تومان</td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    <img src="../images/p1.jpg" width="80" alt="" />
                                                                </th>
                                                                <td className="fw-bold">پیتزا پپرونی</td>
                                                                <td>145,000 تومان</td>
                                                                <td>
                                                                    1
                                                                </td>
                                                                <td>145,000 تومان</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav className="d-flex justify-content-center mt-5">
                <ul className="pagination">
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                </ul>
            </nav>
        </>
    )
}