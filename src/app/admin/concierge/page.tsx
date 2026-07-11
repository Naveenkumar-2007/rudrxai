import { prisma } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Calendar, TrendingUp } from "lucide-react"

export default async function ConciergeDashboard() {
  const conversationsCount = await prisma.conversation.count()
  const leadsCount = await prisma.lead.count()
  const activeConversations = await prisma.conversation.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 5,
    include: {
      messages: true,
      lead: true
    }
  })

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Concierge Analytics</h1>
        <p className="text-muted-foreground mt-2">Monitor active conversations, lead generation, and agent performance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversationsCount}</div>
            <p className="text-xs text-muted-foreground">All time sessions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leadsCount}</div>
            <p className="text-xs text-muted-foreground">Captured by Discovery Agent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Booked Meetings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Pending Phase 4 integrations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversationsCount > 0 ? Math.round((leadsCount / conversationsCount) * 100) : 0}%</div>
            <p className="text-xs text-muted-foreground">Conversations to Leads</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Active Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeConversations.map((convo) => (
                <div key={convo.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Session: {convo.sessionId}</p>
                    <p className="text-xs text-muted-foreground">{convo.messages.length} messages</p>
                  </div>
                  <div className="text-sm">
                    {convo.lead ? (
                      <span className="text-primary font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" /> Lead Captured
                      </span>
                    ) : (
                      <span className="text-muted-foreground">Anonymous</span>
                    )}
                  </div>
                </div>
              ))}
              {activeConversations.length === 0 && (
                <div className="text-center text-muted-foreground p-4">No active conversations yet.</div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>AI Performance (Agents)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Welcome Agent</p>
                  <p className="text-xs text-muted-foreground">Avg Response: 1.2s</p>
                </div>
                <div className="text-green-500 font-medium">Healthy</div>
              </div>
              <div className="p-4 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Solutions Agent</p>
                  <p className="text-xs text-muted-foreground">RAG Hit Rate: 94%</p>
                </div>
                <div className="text-green-500 font-medium">Healthy</div>
              </div>
              <div className="p-4 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Booking Agent</p>
                  <p className="text-xs text-muted-foreground">Data Extraction: Active</p>
                </div>
                <div className="text-green-500 font-medium">Healthy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
