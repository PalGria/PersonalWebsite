
const Blog = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest entries from my Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;