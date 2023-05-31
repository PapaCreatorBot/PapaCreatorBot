var admin = Bot.getProperty("#admin")
  if (admin == user.telegramid) {
    var url = Libs.Webhooks.getUrlFor({
      command: lib.commandOnWebhook(),
      user_id: user.id
    })
    var create = WebApp.getUrl({
      command: "#creates",
      options: { url: url }
    })

    Api.sendMessage({
      text:
        "👋 Hi, " ±
        user.first_name ±
        " I can help you to manage your bot using my command\n\n/mycommand - command list\n/edit - [command name]\n/preview - Click to preview your work.",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📝Create a new command", web_app: { url: create } }]
        ]
      }
    })
    return
  }
