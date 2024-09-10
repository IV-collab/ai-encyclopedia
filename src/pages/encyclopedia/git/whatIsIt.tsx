import IVPage from '@/components/ui/pages/Page';

const EncyclopediaPageGitWhatIsIt = () => {
  return (
    <IVPage
      title="What is it?"
      content={
        <div>
          <p className="mb-2">Git is a free and open source distributed version control system.</p>
          <p className="mb-10">
            Git saves snapshots of the entire codebase at various points in time, allowing multiple users to work on a
            shared project while handling concurrent changes seamlessly into a single source of truth.
          </p>
          <div className="text-2xl font-bold mb-10">
            <p>How it works</p>
          </div>
          <p className="mb-2">
            Each engineer "clones" the code repository locally - whether it be your own PC, a virtual machine on the
            cloud, etc.
          </p>
          <p className="mb-2">
            You may create "branches", representing an isolated snapshot of the codebase at a specific point in time.
            <br />
            Every time an engineer "commits" and "pushes" their changes to a branch, their changes are saved as
            <br />
            a linear history of changes to the isolated branch.
            <br />
          </p>
          <p className="mb-2">
            These changes may be merged to other branches, to combine the works of numerous engineers into a
            <br />
            single, consolidated source of truth.
          </p>
        </div>
      }
    />
  );
};

export default EncyclopediaPageGitWhatIsIt;
