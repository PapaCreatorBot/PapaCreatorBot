var admin = Bot.getProperty("#admin")

  if (admin == user.telegramid) {
    var url = Libs.Webhooks.getUrlFor({
      command: libs.commandOnWebhook(),
      user_id: user.id
    })
    var create = WebApp.getUrl({
      command: "#creates",
      options: { url: url }
    }) 

Api.sendMessage({
text : `👋Hi, ` ±
        user.first_name ±
        ` Manage your bot using command.\n\n/mycommand - command list.\n/edit - editing command.\n/preview - click to preview your work.\n\n💎 <a href="https://github.com/PapaCreatorBot/Help/blob/main/Plan.md#what-it----iteration">Iteration</a>: <b>` ±
        Libs.iterations.balance.value() ±
        `</b>\n♻️ Next Payment in: <b>` ±
        Libs.interation.resets() ±
        ` Days</b>`,
      disable_web_page_preview: true,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📝Create a new command", web_app: { url: create } }]
        ]
      }
    })
  }