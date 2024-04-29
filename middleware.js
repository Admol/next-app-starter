// 导入 Next.js 中间件模块和相关设置
import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

// 设置语言选择器的支持语言列表
acceptLanguage.languages(languages)

// 定义路由配置对象，包含路由匹配器的设置
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

// 定义中间件函数，处理语言路由重定向
export function middleware(req) {
  let lng

  // 从 cookie 中获取语言信息
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)

  // 如果 cookie 中没有语言信息，则从请求头中的 Accept-Language 字段获取
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))

  // 如果还是没有语言信息，则使用默认语言 fallbackLng
  if (!lng) lng = fallbackLng


  console.log("cookieName:",cookieName,",Accept-Language:",req.headers.get('Accept-Language')," pathname:",req.nextUrl.pathname," lng:",lng)


  // 如果请求的路径不是支持的语言路径，并且不是 Next.js 内部路径，则进行语言路由重定向
  if (
      !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  // 如果请求头中包含 referer 字段，则根据上一个页面的语言设置当前页面的语言，并设置对应的语言 cookie
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  // 返回 NextResponse.next()，表示继续处理下一个中间件或路由处理器
  return NextResponse.next()
}
