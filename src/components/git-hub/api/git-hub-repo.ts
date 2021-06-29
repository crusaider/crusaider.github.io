export interface GitHubRepo {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly full_name: string;
  readonly html_url: string;
  readonly topics: string[];
  readonly pushed_at: Date;
  readonly created_at: Date;
  readonly updated_at: Date;
}
