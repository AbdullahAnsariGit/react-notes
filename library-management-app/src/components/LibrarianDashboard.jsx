// import { useState, useEffect } from 'react';
// import { useSupabase } from '../contexts/SupabaseContext';

// function LibrarianDashboard() {
//   const { supabase } = useSupabase();
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     const { data } = await supabase
//       .from('book_requests')
//       .select('*, profiles(email)')
//       .order('created_at', { ascending: false });
//     setRequests(data || []);
// console.log('datadata',data);


//   };

//   const handleStatusUpdate = async (requestId, status) => {
//     const { error } = await supabase
//       .from('book_requests')
//       .update({ status })
//       .eq('id', requestId);
//     if (!error) fetchRequests();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Librarian Dashboard</h1>
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Book Requests</h2>
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th className="text-left p-2">Student Email</th>
//               <th className="text-left p-2">Book Title</th>
//               <th className="text-left p-2">Status</th>
//               <th className="text-left p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request) => (
//               <tr key={request.id}>
//                 <td className="p-2">{request.profiles.email}</td>
//                 <td className="p-2">{request.book_title}</td>
//                 <td className="p-2">{request.status}</td>
//                 <td className="p-2">
//                   {request.status === 'pending' && (
//                     <>
//                       <button
//                         onClick={() => handleStatusUpdate(request.id, 'approved')}
//                         className="bg-green-500 text-white px-2 py-1 rounded mr-2"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleStatusUpdate(request.id, 'rejected')}
//                         className="bg-red-500 text-white px-2 py-1 rounded"
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default LibrarianDashboard;


import { useState, useEffect } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';

function LibrarianDashboard() {
  const { supabase } = useSupabase();
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      console.log('Librarian user:', userData.user); // Debug: Check user
      const { data: profileData } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userData.user.id)
        .single();
      console.log('Librarian role:', profileData); // Debug: Check role
      const { data, error } = await supabase
        .rpc('get_book_requests_with_emails');
      console.log('Fetch requests:', data, error); // Debug: Check query result
      if (error) throw error;
      setRequests(data || []);
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to fetch requests');
    }
  };

  const handleStatusUpdate = async (requestId, status) => {
    try {
      const { error } = await supabase
        .from('book_requests')
        .update({ status })
        .eq('id', requestId);
      console.log('Update error:', error); // Debug
      if (error) throw error;
      fetchRequests();
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message || 'Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Librarian Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Book Requests</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {requests.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Student Email</th>
                <th className="text-left p-2">Book Title</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="p-2">{request.email || 'Unknown'}</td>
                  <td className="p-2">{request.book_title}</td>
                  <td className="p-2">{request.status}</td>
                  <td className="p-2">
                    {request.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleStatusUpdate(request.id, 'approved')}
                          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(request.id, 'rejected')}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default LibrarianDashboard;