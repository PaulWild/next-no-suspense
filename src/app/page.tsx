import { Suspense } from "react";
import { AsyncTask } from "./AsyncTask";

export const dynamic = "force-dynamic";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>This is a header</h1>
      <Suspense fallback={<div> I am suspended!!!!!!</div>}>
        <AsyncTask />
      </Suspense>
    </>
  );
}
