import { ReactNode } from "react"
import { Highlight } from "prism-react-renderer"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MatContentCopy } from "@/components/icons/material-icons"

type CodeProps = {
  children: React.ReactElement<{ children: ReactNode; className: string }>
}

const Code = ({ children }: CodeProps) => {
  const code = children.props.children?.toString().trim() || ""
  const className = children.props.className
  const matches = className.match(/language-(.*)/)
  const lang = matches?.[1] || ""

  const showCodeTitle = false

  return (
    <div className="bg-fill-quaternary border-fill-tertiary m-0 mb-4 overflow-hidden rounded-lg border">
      {showCodeTitle && <CodeTitle title={lang} />}

      <Highlight language={lang} code={code} theme={{ plain: {}, styles: [] }}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={cn(
              "font-jetbrains-mono m-0 overflow-auto p-2 text-left text-sm leading-6",
              "[&_span:first-child]:text-label-quaternary [&_span:first-child]:mr-5", // Line numbers
              "[&_.token.punctuation]:text-label-secondary",
              "[&_.token.comment]:text-label-secondary",
              "[&_.token.function]:font-bold",
              "[&_.token.keyword]:text-gray-1",
              // "[&_.token.cdata]:text-gray-1 [&_.token.comment]:text-gray-1 [&_.token.doctype]:text-gray-1 [&_.token.imports]:text-gray-1 [&_.token.parameter]:text-gray-1 [&_.token.plain]:text-gray-1 [&_.token.prolog]:text-gray-1",
              // "[&_.token.boolean]:text-ios-blue [&_.token.constant]:text-ios-blue [&_.token.deleted]:text-ios-blue [&_.token.number]:text-ios-blue [&_.token.property]:text-ios-blue [&_.token.symbol]:text-ios-blue [&_.token.tag]:text-ios-blue",
              // // "[&_.token.boolean]:text-ios-yellow [&_.token.constant]:text-ios-yellow [&_.token.deleted]:text-ios-yellow [&_.token.number]:text-ios-yellow [&_.token.property]:text-ios-yellow [&_.token.symbol]:text-ios-yellow [&_.token.tag]:text-ios-yellow",
              // "[&_.token.attr-name]:text-ios-green [&_.token.builtin]:text-ios-green [&_.token.char]:text-ios-green [&_.token.inserted]:text-ios-green [&_.token.number]:text-ios-green [&_.token.selector]:text-ios-green [&_.token.string]:text-ios-green",
              // "[&_.language-css_.style]:text-ios-cyan [&_.token.entity]:text-ios-cyan [&_.token.operator]:text-ios-cyan [&_.token.url]:text-ios-cyan",
              // "[&_.token.atrule]:text-ios-blue [&_.token.attr-value]:text-ios-blue [&_.token.keyword]:text-ios-blue",
              // "[&_.token.class-name]:text-ios-green [&_.token.function]:text-ios-green [&_.token.maybe-class-name]:text-ios-green",
              // "[&_.token.important]:text-ios-cyan [&_.token.regex]:text-ios-cyan [&_.token.variable]:text-ios-cyan",
              className
            )}
          >
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

const CodeTitle = ({ title }: { title: string }) => {
  return (
    <div className="border-fill-tertiary bg-fill-quaternary/50 flex items-center justify-between truncate border-b-1 px-2 py-2">
      <label className="text-label-primary/86 text-sm leading-6 font-medium tracking-[0em]">
        {title}
      </label>
      <Button
        className="hover:bg-fill-quaternary text-gray-1 transition-colors duration-250"
        isIconOnly
      >
        <MatContentCopy />
      </Button>
    </div>
  )
}

export { Code, type CodeProps }
