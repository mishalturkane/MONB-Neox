'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from 'lucide-react'

export function FaucetComponent() {
  const [network, setNetwork] = useState('devnet')

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Request Airdrop</CardTitle>
          <p className="text-sm text-gray-400">Maximum of 2 requests per hour</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input 
              type="text" 
              placeholder="Wallet Address" 
              className="flex-grow bg-gray-800 border-gray-700"
            />
            <Input 
              type="text" 
              placeholder="Amount" 
              className="w-24 bg-gray-800 border-gray-700"
            />
          </div>
          <Select value={network} onValueChange={setNetwork}>
            <SelectTrigger className="w-full bg-gray-800 border-gray-700">
              <SelectValue placeholder="Select network" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="devnet">devnet</SelectItem>
              <SelectItem value="testnet">testnet</SelectItem>
              <SelectItem value="mainnet">mainnet</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full bg-gray-700 hover:bg-gray-600">
            Confirm Airdrop
          </Button>
        </CardContent>
      </Card>

      <Card className="flex items-start justify-center min-h-screen pt-[20vh]">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-bold">Higher Airdrop Limit Unlocked!</h2>
          <p className="text-sm text-gray-400">
            You have connected your GitHub account and unlocked a higher airdrop limit.
          </p>
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            Disconnect your GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}