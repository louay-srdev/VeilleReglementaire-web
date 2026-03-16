import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ClipboardList, ArrowRight } from "lucide-react"

const shortcuts = [
  {
    title: "Base réglementaire",
    description: "Consultez les textes réglementaires applicables à votre activité",
    href: "/regulations",
    icon: FileText,
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "Plan d'actions",
    description: "Gérez vos actions de mise en conformité",
    href: "/action-plan",
    icon: ClipboardList,
    gradient: "from-success/10 to-success/5",
    iconBg: "bg-success/10 text-success",
  },
]

export function ShortcutCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {shortcuts.map((shortcut) => (
        <Link key={shortcut.href} href={shortcut.href}>
          <Card className="group rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer h-full">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${shortcut.iconBg}`}
                >
                  <shortcut.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      {shortcut.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {shortcut.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
