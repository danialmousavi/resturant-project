import Loading from "@/components/modules/loading/Loading";
import Table from "@/components/transactions/table";
import Link from "next/link";
import { Suspense } from "react";

export default function TransactionsPage({ searchParams }) {
    const params = new URLSearchParams(searchParams);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">تراکنش ها</h4>
                <Link href="/users/create" className="btn btn-sm btn-outline-dark">ایجاد تراکنش</Link>
            </div>

            <Suspense key={params.toString()} fallback={<Loading />}>
                <Table params={params.toString()} />
            </Suspense>
        </>
    )
}