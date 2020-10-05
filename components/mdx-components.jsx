import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import cx from 'classnames'

function Code({ children, className }) {
  const language = className.replace(/language-/, '')
  const [lang, filename] = language.split(':')
  console.log('filename: ', filename)

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      theme={theme}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className='bg-blue-600 text-white rounded text-xs shadow-sm font-mono font-light'>
          {filename && <div className='py-2 px-4'>{filename}</div>}
          <pre
            className={cx(className, 'bg-none p-4 overflow-scroll')}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export { Code }
