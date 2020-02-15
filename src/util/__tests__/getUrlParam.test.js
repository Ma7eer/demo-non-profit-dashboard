import getUrlParams from '../getUrlParam'

test('get the specific parameter from a url', () => {
  const url = 'https://someDomainName.org?value=helloWorld'

  /*
  ===================================================
  The function getUrlParams uses window.location.href
  the lines below mock window.location.href 
  ===================================================
  */
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  })
  expect(getUrlParams('value')).toBe('helloWorld')
})
