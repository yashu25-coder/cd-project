
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function CodeEditor() {
  const [code, setCode] = useState('')

  return (
    <div className="h-screen w-screen bg-background text-foreground">
      {/* Code Editor Full-Screen */}
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <Textarea
            className="w-full h-full resize-none font-mono"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
