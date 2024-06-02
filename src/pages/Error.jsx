import React from "react";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
    </div>
  );
}

export default Error;
