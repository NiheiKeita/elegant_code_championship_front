"use client"

import Link from "next/link";
import React from "react"

export const HomeView = React.memo(function HomeView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 ">
      <div className="max-w-3xl rounded-lg bg-gray-700 p-10 text-center text-white shadow-lg backdrop-blur-md">
        <h1 className="mb-6 text-4xl font-bold">Elegant Code Championshipへようこそ</h1>
        <p className="mb-8 text-lg">
          コードの美しさを追求する全てのプログラマーへ――
          私たちは、社内で「Elegant Code Championship」を開催します！この大会では、与えられた汚いコードをどれだけ美しく、そして効率的に改善できるかを競います。コーディングの腕前を存分に発揮し、最もエレガントなコードを作り上げるチャンピオンを目指しましょう。
        </p>
        <h2 className="mb-2 text-2xl font-semibold">ルールと詳細</h2>
        <ul className="mb-4 list-inside list-disc text-left text-lg">
          <li>対象コードの提供: 大会当日、特定の汚いコードが配布されます。</li>
          <li>改善の時間: 制限時間内に、コードの可読性、保守性、効率性を向上させるために工夫を凝らしてください。</li>
          <li>評価基準: コードは以下の観点から評価されます。
            <ul className="ml-6 list-inside list-disc">
              <li>可読性: コードが読みやすく、理解しやすいかどうか。</li>
              <li>保守性: 変更や追加がしやすく、バグを防ぎやすい構造になっているか。</li>
              <li>効率性: パフォーマンスやリソースの利用効率が向上しているか。</li>
            </ul>
          </li>
          <li>審査員: 経験豊富なエンジニアが審査を行います。</li>
        </ul>
        <h2 className="mb-2 text-2xl font-semibold">参加方法</h2>
        <p className="mb-4 text-lg">
          その場ですぐに参加可能です！
        </p>
        <h2 className="mb-2 text-2xl font-semibold">賞品</h2>
        <p className="mb-4 text-lg">
          優勝者には豪華賞品と「Elegant Code Champion」の称号が贈られます。さらに、上位入賞者には特別な社内特典も用意しています。
        </p>
        <p className="text-lg">
          この機会に、自分のコーディングスキルを試し、磨き、同僚たちと切磋琢磨しませんか？皆さんの挑戦をお待ちしています！
        </p>
        <Link href="/questions">
          <p className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700">
            Not Elegant Code一覧に行く
          </p>
        </Link>
      </div>
    </div>
  );
})
