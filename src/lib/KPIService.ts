export function getGitHubFollowersCount(): Promise<number> {
    // TODO Fetch from GitHub API with cache
    return Promise.resolve(40);
}

export function getTotalCommercialExperience(): number {
    const firstJobDate = new Date(2022, 6);
    const now = new Date();
    const diff = now.getTime() - firstJobDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export function getSpecializations(): string[] {
    return [".NET", "Backend Development", "Full-Stack Development", "Kubernetes", "Docker", "Azure", "Software Architecture"];
}