export function PrivateNotice() {
  return (
    <div className="p-4 rounded-xl bg-foreground/[0.03] border border-border/30">
      <p className="text-small text-muted">
        <span className="inline-block w-4 h-4 mr-2 align-middle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </span>
        Task details are private. Contact us for research collaboration.
      </p>
    </div>
  );
}
