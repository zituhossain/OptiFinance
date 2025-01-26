import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React from "react";

const AccountPage = async ({ params }) => {
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5 gap-4 flex items-end justify-between">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold gradient-title capitalize">
          {account?.name}
        </h1>
        <p className="text-muted-foreground">{account?.type} Account</p>
      </div>

      <div className="text-right pb-2">
        <div className="text-xl sm:text-2xl font-bold">
          ${parseFloat(account?.balance).toFixed(2)}
        </div>
        <p className="text-muted-foreground text-sm">
          {account._count.transactions} Transactions
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
