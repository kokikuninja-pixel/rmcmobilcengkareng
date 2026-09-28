import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatTanggalPendek } from '@/lib/utils';
import type { Article } from '@/lib/articles';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge className="bg-primary/15 text-primary hover:bg-primary/20">{article.category}</Badge>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {article.readMinutes} menit baca
        </span>
      </div>

      <h2 className="font-display text-lg font-bold leading-snug">
        <Link href={`/artikel/${article.slug}`} className="transition-colors hover:text-primary">
          <span className="absolute inset-0" aria-hidden="true" />
          {article.title}
        </Link>
      </h2>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {article.description}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t pt-4 text-xs text-muted-foreground">
        <time dateTime={article.publishedAt}>{formatTanggalPendek(article.publishedAt)}</time>
        <span className="flex items-center gap-1">
          <Tag className="h-3 w-3" />
          {article.author}
        </span>
      </div>
    </Card>
  );
}
