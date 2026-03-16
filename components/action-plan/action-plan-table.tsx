"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StatusBadge } from "@/components/ui/status-badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"

type ActionStatus = "A_FAIRE" | "EN_COURS" | "REALISEE" | "EN_RETARD"

interface Action {
  id: string
  action: string
  regulation: string
  responsible: {
    name: string
    initials: string
    avatar?: string
  }
  deadline: string
  status: ActionStatus
}

interface ActionPlanTableProps {
  actions: Action[]
}

export function ActionPlanTable({ actions }: ActionPlanTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-semibold">Action</TableHead>
            <TableHead className="font-semibold">Réglementation</TableHead>
            <TableHead className="font-semibold">Responsable</TableHead>
            <TableHead className="font-semibold">Échéance</TableHead>
            <TableHead className="font-semibold">Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {actions.map((action) => (
            <TableRow key={action.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell className="font-medium max-w-[300px]">
                <span className="line-clamp-2">{action.action}</span>
              </TableCell>
              <TableCell className="text-muted-foreground max-w-[200px]">
                <span className="line-clamp-2">{action.regulation}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={action.responsible.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {action.responsible.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{action.responsible.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{action.deadline}</span>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={action.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Mobile card view for responsive display
export function ActionPlanCards({ actions }: ActionPlanTableProps) {
  return (
    <div className="space-y-3">
      {actions.map((action) => (
        <div
          key={action.id}
          className="rounded-xl border border-border bg-card p-4 space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-medium text-foreground line-clamp-2">
              {action.action}
            </h4>
            <StatusBadge status={action.status} />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {action.regulation}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={action.responsible.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {action.responsible.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                {action.responsible.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{action.deadline}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
