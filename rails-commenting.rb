# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) Assigns the command to list all of the items in a model, to @posts. Calling this will show all of the objects and thier properties currently associated with the model
    @posts = BlogPost.all
  end

  # ---3) Method defiition that shows a selected model entry.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Shows the form that allows the input for the creation of a new object. Does not create the object.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) passes the private method `blog_post_params` to the `create` method. Creates a new `BlogPost` object.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Finds the object that meets the crteria passed through `params[:id}`. (similar to `show`)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Updates the selected object with the new information passed through (and allowed by)  `blog_post_params`.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Sends the user back to the page represented by the `blog_posts_path` alias.  This happens (in this particular code) if the `destroy` method successfully executed.
      redirect_to blog_posts_path
    end
  end

  # ---9) the `private` method marks where private methods are listed for the class. These methods cannot be accessed outside of the class they are created in.
  private
  def blog_post_params
    # ---10)Shows which model columns can be manipulated externally during certain parts of the RESTful route.
    params.require(:blog_post).permit(:title, :content)
  end
end
