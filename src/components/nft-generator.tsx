'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NftGenerator() {
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [attributes, setAttributes] = useState('')
  const [royaltyPercentage, setRoyaltyPercentage] = useState('')
  const [collection, setCollection] = useState('')
  const [isMutable, setIsMutable] = useState(true)
  const [error, setError] = useState('')

  const handleGenerateNFT = () => {
    setError('')

    if (!name || !symbol || !description || !imageUrl) {
      setError('Name, Symbol, Description, and Image URL are required')
      return
    }

    if (royaltyPercentage && (isNaN(Number(royaltyPercentage)) || Number(royaltyPercentage) < 0 || Number(royaltyPercentage) > 100)) {
      setError('Royalty percentage must be a number between 0 and 100')
      return
    }

    // Here you would typically call an API or blockchain method to generate the NFT
    console.log('Generating NFT:', { name, symbol, description, imageUrl, attributes, royaltyPercentage, collection, isMutable })
    // For demo purposes, we'll just log the data
    alert('NFT generation initiated! Check the console for details.')
  }

  return (
    <Card className="flex items-start justify-center min-h-screen pt-[20vh]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">NFT Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="NFT Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="text"
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Textarea
          placeholder="Attributes (JSON format)"
          value={attributes}
          onChange={(e) => setAttributes(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Input
          type="number"
          placeholder="Royalty Percentage"
          value={royaltyPercentage}
          onChange={(e) => setRoyaltyPercentage(e.target.value)}
          className="bg-gray-800 border-gray-700"
        />
        <Select value={collection} onValueChange={setCollection}>
          <SelectTrigger className="w-full bg-gray-800 border-gray-700">
            <SelectValue placeholder="Select collection" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="collection1">Collection 1</SelectItem>
            <SelectItem value="collection2">Collection 2</SelectItem>
            <SelectItem value="collection3">Collection 3</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Switch
            id="mutable"
            checked={isMutable}
            onCheckedChange={setIsMutable}
          />
          <Label htmlFor="mutable">Mutable</Label>
        </div>
        <Button 
          className="w-full bg-gray-700 hover:bg-gray-600"
          onClick={handleGenerateNFT}
        >
          Generate NFT
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