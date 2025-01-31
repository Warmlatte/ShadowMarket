const addSmallTalk = [
  '讓我看看今天進了什麼好東西 (ﾟ3ﾟ)～♪',
  '別告訴我還是從巨龍巢穴撈回來的吧 (ΦωΦ)',
  '這批貨是不是從迷霧深林裡帶回來的 (¬‿¬)',
  '這回進的東西有沒有讓你心驚膽跳的冒險故事？ (´ΘωΘ`)',
  '這次又從哪兒淘來的好東西？別告訴我是遺跡裡的咒物o(≧∇≦o)',
  '又上新貨了？該不會是來自深淵之門的稀世珍品吧(`･ω･´)',
  '這批貨從哪來的？龍之墓穴還是元素界？總覺得這次不一般喔  ( ºωº )',
  '又進貨了？是不是從那詭異的地精商人手裡撈來的？ (￣▽￣)」',
  '這次的貨一定很特別吧？不會是偷了龍巢的金幣順便撈了寶物吧 ψ(｀∇´)ψ',
  '這次的貨會不會是來自火焰巨龍的私藏寶藏？ ( •̀ ω •́ )y',
  '說吧，這批貨是不是冒險者聯盟的禁忌物品？ (Φ∀Φ)',
  '嘶～這次進的東西，不會是幽暗森林裡的詭異魔法吧？ (๑•̀ㅂ•́)و✧',
  '這回有沒有來自時間裂縫裡的古代神器？ (☆▽☆)',
  '嘿嘿，這些貨物有沒有被附上強力的詛咒呢？ (☉｡☉)!',
  '這批貨看著有點眼熟，不會是從骷髏王的寶藏裡偷出來的吧？ ψ(｀∇´)ψ',
  '哇，這批貨物的魔力波動真強烈，該不會是星辰魔法的產物？ (｡♥‿♥｡)',
  '該不會這些貨是從沉沒之城打撈上來的吧？ (≧ω≦)',
  '這次的貨，有沒有閃著金光的巨龍之牙？好想收藏一個！ (๑˃̵ᴗ˂̵)و',
  '這貨是從流沙之國的古墓裡帶回來的嗎？該不會有沙蟲跟著吧？ Σ(っ °Д °;)っ',
  '不會又是傳說中的詭異魔偶吧？上次那東西嚇得我半夜睡不著！ (ʘдʘ╬)',
  '這些貨品會不會是銀月精靈的私藏寶石？我可想要一塊！ (´,,•ω•,,)♡',
  '別說，這些貨品難道是從黑暗王座的祭壇上搶回來的？太刺激了吧！ (｀∇´ゞ',
]

const editSmallTalk = [
  '好啦，讓我們偷偷改一改，看看能不能讓它賣得更快！ψ(｀∇´)ψ',
  '你確定這個魔法道具不需要來點小升級？(๑•̀ㅂ•́)و✧',
  '嗯……是不是該給它一個更酷炫的名字？或者多加點魔力？（￣▽￣）～★',
  '好啦，誰說商品不能改？要不加個閃亮亮的特效？ (☆▽☆)',
  '你確定這個價錢不會嚇跑所有冒險者嗎？ Σ(￣□￣lll)',
  '嗯？要不再給它加個‘傳奇’的標籤？會更搶手喔！ (☆▽☆)',
  '再給它添幾句華麗的描述，讓冒險者更想掏錢！(￣▽￣)ノ',
  '標這個價格，會不會被冒險者懷疑是假貨啊？(¬_¬)',
  '老闆，這樣的描述，真的能傳達它的魔力嗎？ (￢_￢)',
  '再給它添幾句華麗的描述，讓冒險者更想掏錢！ (￣▽￣)ノ',
]

const deleteSmallTalk = [
  '嗯？你確定要刪掉這個商品嗎？(๑•̀ㅂ•́)و✧',
  '這個商品雖然不是很搶手，但也不至於要刪掉吧？(´･_･`)',
  '這個商品是不是可以再給它一次機會？(´･_･`)',
  '這可是暗影市集中難得一見的寶物，真的要將它從清單中刪除嗎？想好了再決定喔！(⊙＿⊙)',
  '這商品就要消失在暗影之中，你真的下定決心了嗎？(⊙_⊙;)',
  '嗯？這可是難得一見的好東西，真的捨得下手刪掉嗎？(゜-゜)',
  '啊～這件商品要說再見了嗎？別讓它變成遺憾喔！(ಥ﹏ಥ)',
  '欸欸，這可是從巨龍手中奪來的寶物，真的要丟掉？Σ(っ °Д °;)っ',
  '咦？你確定不是手滑了嗎？別把寶貝給刪了啊！Σ(°ロ°',
  '真的要刪嗎？我感覺它正在默默哭泣呢…… (；д；)',
  '欸，這麼快就要跟它說再見？再給它一次機會吧！(╥_╥)',
]

const passwordSmallTalk = [
  '✧ 黑暗中浮現一行字：「密語為通行之匙，唯真正的守護者才可通行。請慎重回答，冒險者……」┐(´д｀)┌',
  '嘶……一道低語在耳邊響起：「只有持有黃金印記的守護者才配進入此地，請說出你的密語…… 」(ΦωΦ)',
  '✧ 黑暗中傳來低語：「只有得到星辰祝福的人，才有資格揭開這扇門的祕密。請說出密語，或準備接受未知的命運……」(Φ皿Φ)',
  '你觸碰到一道古老的魔法結界，虛空中浮現文字：「密語為通行之匙，謹慎選擇你的回答。失誤的代價，可不輕……」(⊙_⊙;)’',
  '一道輕柔而冰冷的聲音響起：「此地僅對守護者敞開，你的密語是否能讓結界信服？小心回答……」(￢_￢)',
  '隱藏的符文開始閃爍：「古老的契約守護此地，請說出正確的密語，否則大門將永遠封閉……」(￣ω￣;)',
  '撫過門上的魔法符文，一道聲音低語：「被選中的人，密語是你的試煉。你準備好了嗎？ 」(ΦзΦ)』',
  '✦ 陰影中傳來低沉的聲音：「闖入者，只有受夜之君主許可者才可通行。你的密語是什麼？……錯誤的回答將招來深淵……」(ಠ_ಠ)',
  '在你的腳下，影子開始扭曲，響起一個刺耳的聲音：「入侵者，只有通曉暗影之語者才能存活。說出你的密語……」(￣ー￣)',
  '昏暗的大門前刻滿古老符文，一股壓抑的氣息撲面而來：「此地受虛無王座守護，說出密語或永遠消失在黑暗中……」(ಠ‿↼)',
  '燭光微弱，一張鬼臉浮現在空中：「只有命運之輪選定的旅者，才能通行此地。密語是什麼？膽敢騙我，後果自負！」(>_<)ノ',
  '牆壁傳來沙沙聲響，像是無形的目光正注視著你：「回答正確，或被吞噬……密語是你的最後希望。」(*｀ω´)つ──☆)',
]

const errorSmallTalk = [
  '低沉的聲音回響四周：「不，這不是正確的答案……闖入者，再錯一次後果自負。」 (╬☉д⊙)',
  '符文黯淡無光……你的密語似乎不被接受，再試一次吧。(⊙_⊙;)',
  '魔法結界微微顫動，但沒有完全開啟。密語並不正確，請慎重回答……(；￢_￢)',
  '低語聲忽然停止，四周一片死寂：‘密語錯誤，通道仍然封閉……’ (ﾟДﾟ≡ﾟДﾟ)',
  '一道淡淡的光芒消失在虛空中：‘這並非通往秘寶的鑰匙，再試一次吧。’ (￣ω￣;)',
  '結界冰冷而堅固：‘你的回答無法打開這扇門，請重新審視你的選擇。’ (￢_￢)',
  '暗影在角落蠢動，冷笑聲從遠處傳來：錯誤的密語，下一次或許沒這麼幸運…… ψ(｀∇´)ψ',
  '大門上浮現血紅的符號：密語不正確，黑暗已記住你的存在……小心下一步。(ಠ_ಠ)',
  '低沉的聲音回響四周：‘不，這不是正確的答案……闖入者，再錯一次後果自負。(╬☉д⊙)',
  '空氣瞬間變得冰冷，一個模糊的聲音低語：‘你的密語並未通過審判……離開，或再試一次……(҂_´)',
  '影子迅速蔓延，像是想抓住你：‘錯誤的答案，夜之守護者正注視著你……要不要再試一次？ (ಠ‿↼)',
]

const askSmallTalk = [
  '唔…這問題有點意思！(ΦωΦ)',
  '等我一下，讓我掐指一算！(¬‿¬)',
  '施法中……噗，差點炸了！(ﾉ>ω<)ﾉ',
  '唔嗯……快了快了！(๑•̀ㅂ•́)و✧',
  '欸？這問題不在我的魔法課本裡！(⊙ω⊙)',
  '思考中……請稍等！(ΦзΦ)',
  '咦？我是不是在哪聽過這問題？(⊙_⊙;)',
  '翻翻魔導書……啊，剛剛掉地上了！(；д；)',
  '稍等，我在腦內翻找記憶碎片！(•ω•)',
  '哎呀，魔力有點卡住了！(´-ω-｀)',
  '快了快了，再給我三秒！(ﾉ>ω<)ﾉ',
  '這問題太深奧，我在努力消化！(¬‿¬)',
  '我在召喚答案……結果只召喚了一隻貓！(ΦωΦ)',
  '等一下，我的腦袋還在啟動中！(￣▽￣)',
  '嘟嘟嚕～加速思考模式啟動！(☆▽☆)',
]

export {
  addSmallTalk,
  editSmallTalk,
  deleteSmallTalk,
  passwordSmallTalk,
  errorSmallTalk,
  askSmallTalk,
}
