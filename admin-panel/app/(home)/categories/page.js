import Table from "@/components/categories/Table";
import Loading from "@/components/modules/loading/Loading";
import Link from "next/link";
import { Suspense } from "react";

export default function UsersPage({ searchParams }) {
    const params = new URLSearchParams(searchParams);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">دسته بندی</h4>
                <Link href="/categories/create" className="btn btn-sm btn-outline-dark">ایجاد دسته‌بندی</Link>
            </div>

            <Suspense key={params.toString()} fallback={<Loading />}>
                <Table params={params.toString()} />
            </Suspense>
        </>
    )
}