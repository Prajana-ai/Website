import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getWorks, addWork, updateWork, deleteWork } from '../../lib/workService';
import { getCreators, addCreator, updateCreator, deleteCreator, CreatorData } from '../../lib/creatorService';
import { WorkItemData, LargeFeatureWork, ListItemWork } from '../../types/works';

const initialWorkFormState: Partial<WorkItemData> = {
  id: '',
  title: '',
  type: 'medium-feature',
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
  const [editingWork, setEditingWork] = useState<WorkItemData | null>(null);

  const [activeTab, setActiveTab] = useState<'works' | 'creators'>('works');

  const [creators, setCreators] = useState<CreatorData[]>([]);
  const [isLoadingCreators, setIsLoadingCreators] = useState(true);
  const [errorCreators, setErrorCreators] = useState<string | null>(null);
  const [showAddCreatorForm, setShowAddCreatorForm] = useState(false);
  const [newCreator, setNewCreator] = useState<CreatorData>({
    id: '',
    name: '',
    bio: '',
    imageUrl: '',
    socialLinks: { twitter: '', github: '', website: '' }
  });
  const [editingCreator, setEditingCreator] = useState<CreatorData | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { user, signOut, loading } = useAuth();

  const fetchWorks = useCallback(async () => {
    setIsLoadingWorks(true);
    setErrorWorks(null);
    try {
      const fetchedWorks = await getWorks();
      setWorks(fetchedWorks);
      const groups: Record<string, WorkItemData[]> = fetchedWorks.reduce((acc, work) => {
        const category = work.category || 'Uncategorized';
        if (!acc[category]) acc[category] = [];
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

  const fetchCreators = useCallback(async () => {
    setIsLoadingCreators(true);
    setErrorCreators(null);
    try {
      const fetchedCreators = await getCreators();
      setCreators(fetchedCreators);
    } catch (err: unknown) {
      console.error('Failed to fetch creators:', err);
      setErrorCreators('Failed to load creators. Please try again.');
    } finally {
      setIsLoadingCreators(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchWorks();
      fetchCreators();
    }
  }, [user, fetchWorks, fetchCreators]);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleWorkInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id: _id, ...dataToUpdate } = newWork;
        await updateWork(editingWork.id, dataToUpdate as Partial<Omit<WorkItemData, 'id'>>);
        setEditingWork(null);
      } else {
        await addWork(newWork as WorkItemData);
      }
      setShowAddWorkForm(false);
      setNewWork(initialWorkFormState as WorkItemData);
      fetchWorks();
    } catch (err: unknown) {
      console.error('Failed to save work:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setFormError(errorMessage || 'Failed to save work. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreatorInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const field = name.split('_')[1];
      setNewCreator(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [field]: value
        }
      }));
    } else {
      setNewCreator(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddCreatorSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!newCreator.id || !newCreator.name) {
      setFormError('ID and Name are required.');
      return;
    }
    setIsSubmitting(true);
    setFormError(null);
    try {
      if (editingCreator) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id: _id, ...dataToUpdate } = newCreator;
        await updateCreator(editingCreator.id, dataToUpdate);
        setEditingCreator(null);
      } else {
        await addCreator(newCreator);
      }
      setShowAddCreatorForm(false);
      setNewCreator({
        id: '',
        name: '',
        bio: '',
        imageUrl: '',
        socialLinks: { twitter: '', github: '', website: '' }
      });
      fetchCreators();
    } catch (err: unknown) {
      console.error('Failed to save creator:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setFormError(errorMessage || 'Failed to save creator. Please try again.');
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
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Welcome, {user.email || 'Admin'}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 sm:mt-0 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-offset-gray-800"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-6 flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('works')}
            className={`py-2 px-6 text-sm font-medium transition-colors ${activeTab === 'works' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
          >
            Manage Works
          </button>
          <button
            onClick={() => setActiveTab('creators')}
            className={`py-2 px-6 text-sm font-medium transition-colors ${activeTab === 'creators' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}`}
          >
            Manage Creators
          </button>
        </div>

        {activeTab === 'works' ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {editingWork ? 'Edit Work Item' : (showAddWorkForm ? 'Add New Work' : 'All Works')}
              </h2>
              <button
                onClick={() => {
                  setShowAddWorkForm(!showAddWorkForm);
                  setEditingWork(null);
                  setNewWork(initialWorkFormState as WorkItemData);
                  setFormError(null);
                }}
                className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${showAddWorkForm ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600'}`}
              >
                {showAddWorkForm ? 'Cancel' : '+ Add New Work'}
              </button>
            </div>

            {showAddWorkForm && (
              <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg mb-8">
                <form onSubmit={handleAddWorkSubmit} className="p-6 space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="workId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">ID (Unique)</label>
                      <input type="text" id="workId" name="id" value={newWork.id || ''} onChange={handleWorkInputChange} required disabled={!!editingWork} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="workAppId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">App ID (optional for links)</label>
                      <input type="text" id="workAppId" name="appId" value={newWork.appId || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="workType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                      <select id="workType" name="type" value={newWork.type} onChange={handleWorkInputChange} required className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white">
                        <option value="large-feature">Large Feature</option>
                        <option value="medium-feature">Medium Feature</option>
                        <option value="list-item">List Item</option>
                        <option value="small-image">Small Image</option>
                      </select>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                      <input type="text" id="workTitle" name="title" value={newWork.title || ''} onChange={handleWorkInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                      <input type="text" id="workCategory" name="category" value={newWork.category || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Visuals & Assets */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="workImageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL (Main visual)</label>
                      <input type="text" id="workImageUrl" name="imageUrl" value={newWork.imageUrl || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workIconUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Icon URL (For list items)</label>
                      <input type="text" id="workIconUrl" name="iconUrl" value={newWork.iconUrl || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workCtaText" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CTA Text (e.g. 'Get', 'Visit')</label>
                      <input type="text" id="workCtaText" name="ctaText" value={newWork.ctaText || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workCtaLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CTA Link (External URL)</label>
                      <input type="text" id="workCtaLink" name="ctaLink" value={newWork.ctaLink || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="workCreatorId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Creator ID</label>
                      <input type="text" id="workCreatorId" name="creatorId" value={newWork.creatorId || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="workCreatorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Creator Name</label>
                      <input type="text" id="workCreatorName" name="creatorName" value={newWork.creatorName || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="workDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                      <textarea id="workDescription" name="description" value={newWork.description || ''} onChange={handleWorkInputChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Conditional Details */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    {newWork.type === 'large-feature' && (
                      <>
                        <div className="sm:col-span-6">
                          <label htmlFor="workSubtitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subtitle (Large Feature only)</label>
                          <input type="text" id="workSubtitle" name="subtitle" value={(newWork as LargeFeatureWork).subtitle || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                        </div>
                        <div className="sm:col-span-6">
                          <label htmlFor="workFeatures" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Features (comma-separated, Large Feature only)</label>
                          <input
                            type="text"
                            id="workFeatures"
                            name="features"
                            value={Array.isArray((newWork as LargeFeatureWork).features) ? ((newWork as LargeFeatureWork).features as string[]).join(', ') : ''}
                            onChange={(e) => setNewWork(prev => ({ ...prev, features: e.target.value.split(',').map(s => s.trim()) } as WorkItemData))}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                      </>
                    )}
                    {newWork.type === 'list-item' && (
                      <div className="sm:col-span-3">
                        <label htmlFor="workPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (e.g. '$29' or 'Free', List Item only)</label>
                        <input type="text" id="workPrice" name="price" value={(newWork as ListItemWork).price || ''} onChange={handleWorkInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                      </div>
                    )}
                  </div>

                  {formError && <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>}
                  <div className="pt-5 flex justify-end space-x-3">
                    <button type="button" onClick={() => setShowAddWorkForm(false)} className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500">Cancel</button>
                    <button type="submit" disabled={isSubmitting} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50">{isSubmitting ? 'Submitting...' : (editingWork ? 'Update Work' : 'Add Work')}</button>
                  </div>
                </form>
              </div>
            )}

            <div className="space-y-10">
              {isLoadingWorks ? <p className="text-gray-700 dark:text-gray-300">Loading works...</p> :
                errorWorks ? <p className="text-red-500">{errorWorks}</p> :
                  Object.keys(groupedWorks).length === 0 ? <p className="text-gray-700 dark:text-gray-300">No works found.</p> :
                    Object.entries(groupedWorks).sort().map(([category, worksInCategory]) => (
                      <div key={category}>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">{category}</h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {worksInCategory.map((work) => (
                            <div key={work.id} className="bg-white dark:bg-gray-800 shadow rounded-lg flex flex-col">
                              <div className="p-5 flex-grow">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white truncate">{work.title}</h4>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Type: {work.type}</p>
                                <p className="mt-1 text-xs text-gray-400">ID: {work.id}</p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{work.description}</p>
                              </div>
                              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t flex justify-end space-x-3">
                                <button onClick={() => { setEditingWork(work); setNewWork(work); setShowAddWorkForm(true); setFormError(null); }} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 font-medium">Edit</button>
                                <button onClick={async () => { if (window.confirm('Are you sure you want to delete this work item?')) { await deleteWork(work.id); fetchWorks(); } }} className="text-red-600 hover:text-red-900 dark:text-red-400 font-medium">Delete</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {editingCreator ? 'Edit Creator' : (showAddCreatorForm ? 'Add New Creator' : 'All Creators')}
              </h2>
              <button
                onClick={() => {
                  setShowAddCreatorForm(!showAddCreatorForm);
                  setEditingCreator(null);
                  setNewCreator({
                    id: '',
                    name: '',
                    bio: '',
                    imageUrl: '',
                    socialLinks: { twitter: '', github: '', website: '' }
                  });
                  setFormError(null);
                }}
                className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${showAddCreatorForm ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600'}`}
              >
                {showAddCreatorForm ? 'Cancel' : '+ Add New Creator'}
              </button>
            </div>

            {showAddCreatorForm && (
              <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg mb-8">
                <form onSubmit={handleAddCreatorSubmit} className="p-6 space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="creatorId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">ID (Unique)</label>
                      <input type="text" id="creatorId" name="id" value={newCreator.id} onChange={handleCreatorInputChange} required disabled={!!editingCreator} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="creatorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                      <input type="text" id="creatorName" name="name" value={newCreator.name} onChange={handleCreatorInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Bio & Links */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="creatorImageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Image URL</label>
                      <input type="text" id="creatorImageUrl" name="imageUrl" value={newCreator.imageUrl || ''} onChange={handleCreatorInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="creatorBio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                      <textarea id="creatorBio" name="bio" value={newCreator.bio || ''} onChange={handleCreatorInputChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="social_twitter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Twitter URL</label>
                      <input type="text" id="social_twitter" name="social_twitter" value={newCreator.socialLinks?.twitter || ''} onChange={handleCreatorInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="social_github" className="block text-sm font-medium text-gray-700 dark:text-gray-300">GitHub URL</label>
                      <input type="text" id="social_github" name="social_github" value={newCreator.socialLinks?.github || ''} onChange={handleCreatorInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="social_website" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Personal Website</label>
                      <input type="text" id="social_website" name="social_website" value={newCreator.socialLinks?.website || ''} onChange={handleCreatorInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {formError && <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>}
                  <div className="pt-5 flex justify-end space-x-3">
                    <button type="button" onClick={() => setShowAddCreatorForm(false)} className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-500">Cancel</button>
                    <button type="submit" disabled={isSubmitting} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50">{isSubmitting ? 'Submitting...' : (editingCreator ? 'Update Creator' : 'Add Creator')}</button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {isLoadingCreators ? <p className="text-gray-700 dark:text-gray-300">Loading creators...</p> :
                errorCreators ? <p className="text-red-500">{errorCreators}</p> :
                  creators.length === 0 ? <p className="text-gray-700 dark:text-gray-300">No creators found.</p> :
                    creators.map((creator) => (
                      <div key={creator.id} className="bg-white dark:bg-gray-800 shadow rounded-lg flex flex-col">
                        {creator.imageUrl && <img src={creator.imageUrl} alt={creator.name} className="h-48 w-full object-cover rounded-t-lg" />}
                        <div className="p-5 flex-grow">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">{creator.name} <span className="text-xs text-gray-400 font-normal">({creator.id})</span></h4>
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{creator.bio || 'No bio provided.'}</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t flex justify-end space-x-3">
                          <button onClick={() => { setEditingCreator(creator); setNewCreator(creator); setShowAddCreatorForm(true); setFormError(null); }} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 font-medium">Edit</button>
                          <button onClick={async () => { if (window.confirm('Are you sure you want to delete this creator?')) { await deleteCreator(creator.id); fetchCreators(); } }} className="text-red-600 hover:text-red-900 dark:text-red-400 font-medium">Delete</button>
                        </div>
                      </div>
                    ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
