//channel subscription

function Subscribe(data) {

  Api.getChatMember({

    chat_id: data.chat_id,

    user_id: data.user_id,

    on_result: "/00result " + data.on_result

  })

}

//administrator

function GetAdministrator(data) {

  Api.getChatAdministrators({

    chat_id: data.chat_id,

    on_result: "/00result " + data.on_result

  })

}

//HTTP Get

function HTTPget(data) {

  var body = data.body

  var headers = data.headers

  HTTP.get({

    url: data.url,

    body,

    headers,

    success: "/00result " + data.success

  })

}

//HTTP post

function HTTPpost(data) {

  var body = data.body

  var headers = data.headers

  HTTP.post({

    url: data.url,

    body,

    headers,

    success: "/00result " + data.success

  })

}

//webapp

function GetCaptchaWebApp(data) {

  if (!data || !data.command) {

    return "https://error.com"

  }

  var url = Libs.Webhooks.getUrlFor({

    command: "#onWebhookData",

    content: data.command,

    user_id: user.id

  })

  var create = WebApp.getUrl({

    command: "Captcha",

    options: {

      bot: "https://t.me/" + bot.name + "?start",

      url: url

    }

  })

  return create

}

//auto translate

function GetTransLate() {

  if (content) {

    return content

  }

  return ""

}

function RunTransLate(lang, text) {

  if (!lang || !text) {

    return

  }

  var url =

    "https://api.crypto-twilight.com/translate?msg=" +

    encodeURIComponent(text) +

    "&to=" +

    lang

  HTTP.get({

    url: url,

    folow_redirects: true,

    success: "/#onTranslate " + request.text

  })

}
