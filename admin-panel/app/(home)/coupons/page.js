import Table from "@/components/coupons/table";
import Loading from "@/components/modules/loading/Loading";
import Link from "next/link";
import { Suspense } from "react";

export default function CouponsPage({ searchParams }) {
    const params = new URLSearchParams(searchParams);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">کدهای تخفیف</h4>
                <Link href="/coupons/create" className="btn btn-sm btn-outline-dark">ایجاد کد تخفیف</Link>
            </div>

            <Suspense key={params.toString()} fallback={<Loading />}>
                <Table params={params.toString()} />
            </Suspense>
        </>
    )
}