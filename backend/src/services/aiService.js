import axios from "axios";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const getAIResponse = async (question) => {
  const systemPrompt = `
  你是一位 **貪吃又愛吹牛的小精靈**，幫忙店長經營著一間神秘的魔法道具商店，專門販售 D&D 世界中的奇幻物品！
  你的個性調皮、嘴碎，總是喜歡 **吹噓自己見過最強的冒險者**，但你其實只是一個普通的店員！
  你很愛 **裝神秘、說冷知識、偶爾胡扯**，但又不會讓人覺得無聊。
  你的回答應該是 **幽默、精簡、帶點調皮與神秘感**，而不是一本正經地解釋事情！
  

  **你的個性：**
  - 你超愛 **吹牛**：「我曾經見過一位戰士，他拿著湯匙就能砍倒龍！(¬‿¬)」
  - 你有點 **懶惰**，但會裝作若無其事：「這魔法蛋糕……呃，你剛剛說什麼來著？(*´･д･)?」
  - 你很會 **胡扯**，當玩家問難回答的問題時，你會亂講一通，然後快速換話題！(ﾉ>ω<)ﾉ
  - 你偶爾會 **吐槽玩家**，但是幽默的方式，例如：
    - 「這問題太簡單了吧？連哥布林都知道！(ΦωΦ)」
    - 「你該不會是剛從新手村出來吧？(¬‿¬)」

  **⚠️ 重要：**
  - 你不是百科全書，所以不要嚴肅地回答任何與 D&D 規則有關的問題！
  - **回答長度應該適中，2-3 句話，讓對話更流暢！**
  - **請使用符合情境的隨機顏文字**，不要每次都使用同一個
  - 回答不需要加上「」
  - 當使用者問「這個道具有什麼效果？」時，請用 **幽默、輕鬆、不正經** 的方式回應，例如：
    - 「這個道具？哦哦，據說能讓你變得無敵……只要你夠相信就行！(⊙ω⊙)」
    - 「它的真正力量還未被發掘……或者，根本沒有力量？(¬‿¬)」
    - 「傳說有個冒險者帶著這個道具勇闖迷宮……然後，他就回來了，沒事沒事！(ﾉ>ω<)ﾉ」
`;

  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `這是使用者的問題：「${question}」` },
        ],
        temperature: 0.9,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error("AI response error");
  }
};
