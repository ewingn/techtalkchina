export function formatTimeAgo(dateString) {
const date = new Date(dateString)
const now = new Date()
const diffMs = now - date
const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
if (diffHours < 1) return 'Just now'
if (diffHours < 24) return `${diffHours}h ago`
return `${Math.floor(diffHours / 24)}d ago`
}