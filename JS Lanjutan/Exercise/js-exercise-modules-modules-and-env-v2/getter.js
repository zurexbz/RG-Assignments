function mapUsers(users) {
  return{
    data: users,
    count: users.length,
  };
}

function mapArticles(articles) {
  return{
    data: articles,
    count: articles.length,
  };
}

export default mapUsers;
export { mapArticles }
// TODO: answer here