'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export function CreateTokenComponent() {
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [supply, setSupply] = useState('')
  const [error, setError] = useState('')

  const handleMintToken = () => {
    // Reset error
    setError('')

    // Basic validation
    if (!tokenName || !tokenSymbol || !imageUrl || !supply) {
      setError('All fields are required')
      return
    }

    if (isNaN(Number(supply)) || Number(supply) <= 0) {
      setError('Supply must be a positive number')
      return
    }

    // Here you would typically call an API or blockchain method to mint the token
    console.log('Minting token:', { tokenName, tokenSymbol, imageUrl, supply })
    // For demo purposes, we'll just log the data
    alert('Token minting initiated! Check the console for details.')
  }

  return (
    <Card className="flex items-start justify-center min-h-screen pt-[20vh]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Token</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Token Name"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="text"
          placeholder="Token Symbol"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="number"
          placeholder="Supply"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Button 
          className="w-full bg-gray-700 hover:bg-gray-600"
          onClick={handleMintToken}
        >
          Mint Token
        </Button>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}