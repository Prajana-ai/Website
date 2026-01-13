import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getWorks, addWork, updateWork, deleteWork } from '../../lib/workService'; // Assuming addWork, updateWork will be used later
import { WorkItemData, LargeFeatureWork, ListItemWork } from '../../types/works';

const initialWorkFormState: Partial<WorkItemData> = {
  id: '',
  title: '',
  type: 'medium-feature', // Default type
  description: '',
  category: '',
  creatorId: '',
  creatorName: '',
  imageUrl: '',
  iconUrl: '',
  ctaText: '',
  ctaLink: '',
  appId: '',
};

const AdminDashboardPage: React.FC = () => {
  const [works, setWorks] = useState<WorkItemData[]>([]);
  const [groupedWorks, setGroupedWorks] = useState<Record<string, WorkItemData[]>>({});
  const [isLoadingWorks, setIsLoadingWorks] = useState(true);
  const [errorWorks, setErrorWorks] = useState<string | null>(null);
  const [showAddWorkForm, setShowAddWorkForm] = useState(false);
  const [newWork, setNewWork] = useState<WorkItemData>(initialWorkFormState as WorkItemData);
  const [editingWork, setEditingWork] = useState<WorkItemData | null>(null); // For editing
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { user, signOut, loading } = useAuth();

  /* Hook definitions must come before any early return */
  const fetchWorks = useCallback(async () => {
    setIsLoadingWorks(true);
    setErrorWorks(null);
    try {
      const fetchedWorks = await getWorks();
      setWorks(fetchedWorks);

      // Group works by category
      const groups: Record<string, WorkItemData[]> = fetchedWorks.reduce((acc, work) => {
        const category = work.category || 'Uncategorized';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(work);
        return acc;
      }, {} as Record<string, WorkItemData[]>);
      setGroupedWorks(groups);
    } catch (err: unknown) {
      console.error('Failed to fetch works:', err);
      setErrorWorks('Failed to load works. Please try again.');
    } finally {
      setIsLoadingWorks(false);
    }
  }, []);

  useEffect(() => {
    if (user) { // Only fetch if user is logged in
      fetchWorks();
    }
  }, [user, fetchWorks]);

  const handleLogout = async () => {
    try {
      await signOut();
      // After signOut, AuthProvider will update user state to null
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleDeleteWork = async (workId: string) => {
    if (window.confirm('Are you sure you want to delete this work item?')) {
      setIsSubmitting(true);
      try {
        await deleteWork(workId);
        fetchWorks(); // Refresh list
      } catch (err: unknown) {
        console.error('Failed to delete work:', err);
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setFormError(errorMessage || 'Failed to delete work. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleEditClick = (work: WorkItemData) => {
    setEditingWork(work);
    setNewWork(work); // Populate form with work data
    setShowAddWorkForm(true);
    setFormError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWork(prev => ({ ...prev, [name]: value } as WorkItemData));
  };

  const handleAddWorkSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!newWork.id || !newWork.title || !newWork.type) {
      setFormError('ID, Title, and Type are required.');
      return;
    }
    setIsSubmitting(true);
    setFormError(null);
    try {
      if (editingWork) {
        // Update existing work
        const { id: _id, ...dataToUpdate } = newWork; // Remove id from dataToUpdate, mark _id as unused
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const unusedId = _id;
        await updateWork(editingWork.id, dataToUpdate as Partial<Omit<WorkItemData, 'id'>>);
        setEditingWork(null);
      } else {
        // Add new work
        await addWork(newWork as WorkItemData);
      }
      setShowAddWorkForm(false);
      setNewWork(initialWorkFormState as WorkItemData);
      fetchWorks(); // Refresh the list
    } catch (err: unknown) {
      console.error('Failed to add work:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setFormError(errorMessage || 'Failed to add work. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
        <p className="text-xl text-gray-700 dark:text-gray-300">Loading dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
        <p className="text-xl text-gray-700 dark:text-gray-300">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Welcome, {user.email || 'Admin'}! Manage your 'Works' content here.</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 sm:mt-0 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-offset-gray-800"
            >
              Logout
            </button>
          </div>
        </header>
        {/* Content will go here, ensure this div is closed at the end of the component */}
        {/* Works List Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Manage Works</h2>
          {isLoadingWorks && <p className="text-gray-700 dark:text-gray-300">Loading works...</p>}
          {errorWorks && <p className="text-red-500">{errorWorks}</p>}
          {!isLoadingWorks && !errorWorks && Object.keys(groupedWorks).length === 0 && works.length === 0 && (
            <div className="text-center py-10 px-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <p className="text-gray-700 dark:text-gray-300">No works found. Start by adding a new one!</p>
            </div>
          )}
          {!isLoadingWorks && !errorWorks && Object.keys(groupedWorks).length > 0 && (
            <div className="space-y-10">
              {Object.entries(groupedWorks).sort(([catA], [catB]) => catA.localeCompare(catB)).map(([category, worksInCategory]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {worksInCategory.map((work) => (
                      <div key={work.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg flex flex-col">
                        <div className="p-5 flex-grow">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white truncate">{work.title}</h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Type: {work.type}</p>
                          {work.category && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Category: {work.category}</p>}
                          {work.creatorName && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Creator: {work.creatorName}</p>}
                          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">ID: {work.id}</p>
                          {work.description && (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                              {work.description}
                            </p>
                          )}
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                          <button
                            onClick={() => handleEditClick(work)}
                            className="py-2 px-4 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteWork(work.id)}
                            disabled={isSubmitting}
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 dark:bg-red-500 dark:hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Add New Work Button and Form Section */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {editingWork ? 'Edit Work Item' : (showAddWorkForm ? 'Add New Work Item' : 'Create a New Work')}
            </h2>
            <button
              onClick={() => {
                if (showAddWorkForm && editingWork) { // If editing, cancel goes back to list view, form closes
                  setEditingWork(null);
                  setNewWork(initialWorkFormState as WorkItemData);
                  setShowAddWorkForm(false);
                } else { // If adding or list view, toggle form
                  setEditingWork(null);
                  setNewWork(initialWorkFormState as WorkItemData);
                  setShowAddWorkForm(!showAddWorkForm);
                }
                setFormError(null);
              }}
              className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${showAddWorkForm ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600'}`}
            >
              {showAddWorkForm ? (editingWork ? 'Cancel Edit' : 'Cancel') : '+ Add New Work'}
            </button>
          </div>

          {showAddWorkForm && (
            <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <form onSubmit={handleAddWorkSubmit} className="p-6 space-y-6">
                {/* Common Form fields */}
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="workId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">ID (Unique)</label>
                    <input type="text" id="workId" name="id" value={newWork.id || ''} onChange={handleInputChange} required disabled={!!editingWork} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-100 dark:disabled:bg-gray-700 dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input type="text" id="workTitle" name="title" value={newWork.title || ''} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                    <select id="workType" name="type" value={newWork.type} onChange={handleInputChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white">
                      <option value="large-feature">Large Feature</option>
                      <option value="medium-feature">Medium Feature</option>
                      <option value="list-item">List Item</option>
                      <option value="small-image">Small Image</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <input type="text" id="workCategory" name="category" value={newWork.category || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>

                  {/* Creator ID */}
                  <div className="sm:col-span-3">
                    <label htmlFor="workCreatorId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Creator ID</label>
                    <input type="text" id="workCreatorId" name="creatorId" value={newWork.creatorId || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>

                  {/* Creator Name */}
                  <div className="sm:col-span-3">
                    <label htmlFor="workCreatorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Creator Name</label>
                    <input type="text" id="workCreatorName" name="creatorName" value={newWork.creatorName || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea id="workDescription" name="description" value={newWork.description || ''} onChange={handleInputChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workImageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                    <input type="text" id="workImageUrl" name="imageUrl" value={newWork.imageUrl || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workIconUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icon URL</label>
                    <input type="text" id="workIconUrl" name="iconUrl" value={newWork.iconUrl || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workCtaText" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CTA Text</label>
                    <input type="text" id="workCtaText" name="ctaText" value={newWork.ctaText || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workCtaLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CTA Link</label>
                    <input type="text" id="workCtaLink" name="ctaLink" value={newWork.ctaLink || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="workAppId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">App ID (optional)</label>
                    <input type="text" id="workAppId" name="appId" value={newWork.appId || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                  </div>
                </div>

                {/* Conditional fields based on type */}
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  {newWork.type === 'large-feature' && (
                    <>
                      <div className="sm:col-span-3">
                        <label htmlFor="workSubtitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subtitle</label>
                        <input type="text" id="workSubtitle" name="subtitle" value={(newWork as LargeFeatureWork).subtitle || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="workFeatures" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Features (comma-separated)</label>
                        <input type="text" id="workFeatures" name="features" value={Array.isArray((newWork as LargeFeatureWork).features) ? ((newWork as LargeFeatureWork).features as string[]).join(', ') : ''} onChange={(e) => setNewWork(prev => ({ ...prev, features: e.target.value.split(',').map(s => s.trim()) } as WorkItemData))} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                      </div>
                    </>
                  )}
                  {newWork.type === 'list-item' && (
                    <div className="sm:col-span-3">
                      <label htmlFor="workPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (e.g., $29 or Free)</label>
                      <input type="text" id="workPrice" name="price" value={(newWork as ListItemWork).price || ''} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  )}
                </div>

                {formError && <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>}

                <div className="pt-5">
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingWork(null);
                        setNewWork(initialWorkFormState as WorkItemData);
                        setShowAddWorkForm(false);
                        setFormError(null);
                      }}
                      className="py-2 px-4 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-800"
                    >
                      {isSubmitting ? 'Submitting...' : (editingWork ? 'Update Work' : 'Add Work')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </section>
      </div> {/* This closes <div className="max-w-7xl mx-auto"> */}
    </div>
  );
};

export default AdminDashboardPage;
