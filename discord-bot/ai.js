const {OpenAI}=require("openai")

const openai = new OpenAI();

async function ask(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `${prompt}` }],
    model: "gpt-3.5-turbo",
  });

  return (completion.choices[0]);
}

module.exports={ask,}