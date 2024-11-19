'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function CodeEditor() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  const [question, setQuestion] = useState(`This is where the problem description or instructions would go. 
                You can provide details abou t the coding challenge, input format, 
                expected output, and any constraints.`)


  const handleRunCode = () => {
    setOutput(`Executed code:\n\n${code}`)
  }
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left side: Code Editor */}
      <div className="w-1/2 p-4 border-r border-border">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <Textarea
              className="w-full h-full resize-none font-mono"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
            />
          </CardContent>
        </Card>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex flex-col">
        {/* Top right: Problem Description */}
        
        <div className="h-1/2 p-4 border-b border-border">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Problem Description</CardTitle>
            </CardHeader>
            <CardContent className="overflow-auto">
              <p>
                {question}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom right: Output/Console */}
        <div className="h-1/2 p-4">
          <Card className="h-full flex flex-col">
            <CardHeader className="flex-shrink-0">
              <CardTitle>Output</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto">
                <pre className="font-mono whitespace-pre-wrap">
                    {output || "Output will appear here..."}
                </pre>
                </CardContent>
            <div className="p-4 border-t border-border">
              <Button onClick={handleRunCode} className="w-full">
                Run Code
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
