#!/usr/bin/env python3
#
# 1. `dgj/`は、`https://jpdga-shizuoka.github.io/ssa-round-ratings/libraries/`に置き換える
# 2. 内部リンクは、内部リンク識別子から実識別子へと置き換える
#
#
import panflute as pf
#
# フラグメント識別子をHTML形式からPANDOC形式に変換する
#
LINK_MAP = {
    '800': 'ゲームの説明',
    '801': '規則の適用',
    '80101': '規則の公平性',
    '80102': '規則の執行',
    '80103': '抗議',
    '802': 'ディスクを投げる',
    '80201': 'スロー',
    '80202': 'プレーの順番',
    '80203': '時間超過',
    '80204': 'ティーの開始',
    '80205': 'ライ',
    '80206': 'ライをマークする',
    '80207': 'スタンス',
    '803': '障害物と救済',
    '80301': '動かせる障害物',
    '80302': '障害物からの救済',
    '80303': 'コースの損壊',
    '804': '経路の規制',
    '80401': 'マンダトリーの経路',
    '805': '位置の規制',
    '80501': '位置の確定',
    '80502': '2mより上空にあるディスク',
    '80503': 'ディスクの紛失',
    '806': '区域の規制',
    '80601': 'パッティングエリア',
    '80602': 'アウトオブバウンズ',
    '80603': 'カジュアルエリア',
    '80604': '救済区域',
    '80605': 'ハザード',
    '807': 'ホールの終了',
    '808': 'スコアの記録',
    '809': 'その他のスロー',
    '80901': 'スローの放棄',
    '80902': '暫定スロー',
    '80903': '練習スロー',
    '810': '干渉',
    '811': 'ミスプレー',
    '812': '礼儀',
    '813': '装備',
    '81301': '不正なディスク',
    '81302': '不正な用具',
    'appendix-a': '附則a-マッチプレー',
    'appendix-b': '附則b-ダブルスとチームプレー',
    'appendix-c': '附則c-資料',
    'appendix-d': '附則d-単位の換算',
    'appendix-e': '附則e-索引',
    'appendix-f': '附則f-ディスクゴルフの適応規則',
    'qa-index': '規則qa',
    'qa-obs': '障害物と救済',
    'qa-los': 'ディスクの紛失-1',
    'qa-app': '規則の適用-1',
    'qa-haz': 'ハザード-1'
}
#
#
#
def replace_urls(elem, doc):
    if isinstance(elem, pf.Link):
        url = elem.url
        if url.startswith("ordg/"):
            elem.url = url.replace("ordg/", "https://jpdga-shizuoka.github.io/rules/")
        elif url.startswith("dgj/"):
            elem.url = url.replace("dgj/", "https://jpdga-shizuoka.github.io/ssa-round-ratings/libraries/")
        elif not url.startswith("http") and not url.startswith("#"):
            fragment = LINK_MAP.get(url)
            # pf.debug(f'{fragment =}')
            if fragment:
                elem.url = f'#{fragment}'
            else:
                pf.debug(f'Unknown internal link: {url}')
    return elem

def main(doc=None):
    return pf.run_filter(replace_urls, doc=doc)

if __name__ == "__main__":
    main()
