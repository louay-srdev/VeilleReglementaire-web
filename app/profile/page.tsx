"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Building2, UserCircle, Globe, LogOut, Key } from "lucide-react"
import Link from "next/link"

const user = {
  name: "Jean Dupont",
  initials: "JD",
  email: "jean.dupont@entreprise.com",
  phone: "+33 6 12 34 56 78",
  company: "Entreprise SA",
  role: "Responsable HSE",
  domain: "environnement",
}

const domains = [
  { id: "environnement", name: "Environnement" },
  { id: "securite", name: "Sécurité" },
  { id: "qualite", name: "Qualité" },
  { id: "hygiene", name: "Hygiène" },
]

export default function ProfilePage() {
  return (
    <DashboardLayout title="Profil">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Profile Header */}
        <Card className="rounded-xl shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                {user.name}
              </h2>
              <Badge variant="secondary" className="mt-2">
                {user.role}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* User Information */}
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Informations personnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border border-border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <UserCircle className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nom complet</p>
                <p className="font-medium text-foreground">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <p className="font-medium text-foreground">{user.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Entreprise</p>
                <p className="font-medium text-foreground">{user.company}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Domain Selector */}
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Domaine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <Select defaultValue={user.domain}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Sélectionner un domaine" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((domain) => (
                    <SelectItem key={domain.id} value={domain.id}>
                      {domain.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-3" asChild>
              <Link href="/settings/change-password">
                <Key className="h-4 w-4" />
                Changer le mot de passe
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-destructive hover:text-destructive"
              asChild
            >
              <Link href="/login">
                <LogOut className="h-4 w-4" />
                Se déconnecter
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
