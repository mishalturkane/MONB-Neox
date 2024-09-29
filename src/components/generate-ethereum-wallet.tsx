'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import * as bip39 from 'bip39'
import { ethers } from 'ethers'

export function GenerateEthereumWalletComponent() {
  const [mnemonic, setMnemonic] = useState<string>('')
  const [publicAddress, setPublicAddress] = useState<string>('')
  const [privateKey, setPrivateKey] = useState<string>('')
  const [error, setError] = useState<string>('')

  const generateMnemonic = () => {
    try {
      const newMnemonic = bip39.generateMnemonic()
      setMnemonic(newMnemonic)
      setPublicAddress('')
      setPrivateKey('')
      setError('')
    } catch (err) {
      setError('Error generating mnemonic. Please try again.')
      console.error('Error generating mnemonic:', err)
    }
  }

  const generateWallet = async () => {
    if (!mnemonic) {
      setError('Please generate a mnemonic first.')
      return
    }

    try {
      const wallet = ethers.Wallet.fromPhrase(mnemonic)
      setPublicAddress(await wallet.getAddress())
      setPrivateKey(wallet.privateKey)
      setError('')
    } catch (err) {
      setError('Error generating wallet. Please try again.')
      console.error('Error generating wallet:', err)
    }
  }

  return (
    <Card className="flex items-start justify-center min-h-screen pt-[20vh]">
      <CardHeader>
        <CardTitle>Ethereum Wallet Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={generateMnemonic} className="w-full">
          Generate Mnemonic
        </Button>
        {mnemonic && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Mnemonic (12 words):</h3>
            <p className="p-2 bg-secondary rounded break-words">{mnemonic}</p>
          </div>
        )}
        <Button onClick={generateWallet} className="w-full" disabled={!mnemonic}>
          Generate Wallet
        </Button>
        {publicAddress && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Public Address:</h3>
            <p className="p-2 bg-secondary rounded break-all">{publicAddress}</p>
          </div>
        )}
        {privateKey && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Private Key:</h3>
            <p className="p-2 bg-secondary rounded break-all">{privateKey}</p>
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}