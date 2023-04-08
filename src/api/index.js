import { client, q } from '../db';

export const getAllProjects = client
  .query(
    q.Map(
      q.Paginate(
        q.Reverse(
          q.Match(q.Index("all_projects"))
        )
      ),
      q.Lambda("project", q.Get(q.Var("project")))
    )
  )
  .then((response) => {
    const projectsRef = response.data;
    return projectsRef;
  })
